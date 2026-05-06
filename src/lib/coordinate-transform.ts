type Vec2 = [number, number]
type Vec3 = [number, number, number]

export interface CalibrationPoint {
  label?: string
  pixel: Vec2  // [x, y] in map image pixels
  game: Vec3   // [x, y, z] in-game — z is height (ignored for 2D projection)
}

// Solves a 3×3 linear system via Gaussian elimination with partial pivoting
function solve3(A: number[][], b: number[]): [number, number, number] {
  const m = A.map((row, i) => [...row, b[i]])

  for (let col = 0; col < 3; col++) {
    let maxRow = col
    for (let row = col + 1; row < 3; row++) {
      if (Math.abs(m[row][col]) > Math.abs(m[maxRow][col])) maxRow = row
    }
    ;[m[col], m[maxRow]] = [m[maxRow], m[col]]

    if (Math.abs(m[col][col]) < 1e-10) {
      throw new Error("Calibration points are collinear — add a point that is not on the same line")
    }

    for (let row = col + 1; row < 3; row++) {
      const f = m[row][col] / m[col][col]
      for (let j = col; j <= 3; j++) m[row][j] -= f * m[col][j]
    }
  }

  const x = [0, 0, 0]
  for (let i = 2; i >= 0; i--) {
    x[i] = m[i][3]
    for (let j = i + 1; j < 3; j++) x[i] -= m[i][j] * x[j]
    x[i] /= m[i][i]
  }
  return x as [number, number, number]
}

// Least-squares affine fit over n≥3 points.
// Maps [game_x, game_y] → [pixel_x, pixel_y] via:
//   pixel_x = a·gx + b·gy + c
//   pixel_y = d·gx + e·gy + f
function fitAffine(points: CalibrationPoint[]) {
  const AtA = Array.from({ length: 3 }, () => [0, 0, 0])
  const Atbx = [0, 0, 0]
  const Atby = [0, 0, 0]

  for (const { pixel, game } of points) {
    const row = [game[0], game[1], 1]
    for (let j = 0; j < 3; j++) {
      Atbx[j] += row[j] * pixel[0]
      Atby[j] += row[j] * pixel[1]
      for (let k = 0; k < 3; k++) AtA[j][k] += row[j] * row[k]
    }
  }

  return {
    x: solve3(AtA, Atbx),
    y: solve3(AtA, Atby),
  }
}

export function parseVec3(s: string): [number, number, number] {
  const m = s.match(/vec3\(\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)/)
  if (!m) throw new Error(`Invalid vec3 string: ${s}`)
  return [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])]
}

export class CoordinateTransform {
  private affine: ReturnType<typeof fitAffine>

  constructor(points: CalibrationPoint[]) {
    if (points.length < 3) {
      throw new Error(`Need at least 3 calibration points, got ${points.length}`)
    }
    this.affine = fitAffine(points)
  }

  gameToPixel(gx: number, gy: number, _gz: number): { x: number; y: number } {
    const [a, b, c] = this.affine.x
    const [d, e, f] = this.affine.y
    return {
      x: a * gx + b * gy + c,
      y: d * gx + e * gy + f,
    }
  }
}

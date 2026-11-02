export function calcBMI(weightKg: number, heightCm: number) {
  const hM = heightCm / 100
  return weightKg / (hM * hM)
}

export function calcBMR(weightKg: number, heightCm: number, age: number, sex: 'male' | 'female') {
  // Mifflin-St Jeor
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return sex === 'male' ? base + 5 : base - 161
}

export function calcTDEE(bmr: number, activity: number) {
  return bmr * activity
}

export function calcCalorieTarget(tdee: number, goal: 'lose' | 'maintain' | 'gain') {
  if (goal === 'lose') return Math.max(1200, Math.round(tdee - 500))
  if (goal === 'gain') return Math.round(tdee + 300)
  return Math.round(tdee)
}

export function calcMacros(calories: number, goal: 'lose' | 'maintain' | 'gain') {
  let proteinPct = 0.3, fatPct = 0.3, carbPct = 0.4
  if (goal === 'gain') { proteinPct = 0.3; fatPct = 0.25; carbPct = 0.45 }
  if (goal === 'lose') { proteinPct = 0.4; fatPct = 0.3; carbPct = 0.3 }
  return {
    protein: Math.round((calories * proteinPct) / 4),
    fat: Math.round((calories * fatPct) / 9),
    carbs: Math.round((calories * carbPct) / 4),
  }
}

export function projectGoalDate(currentKg: number, targetKg: number, weeklyKg: number) {
  if (weeklyKg <= 0) return null
  const diff = Math.abs(currentKg - targetKg)
  const weeks = diff / weeklyKg
  const d = new Date()
  d.setDate(d.getDate() + Math.round(weeks * 7))
  return d.toISOString().split('T')[0]
}

export function isSafePace(weeklyKg: number) {
  return weeklyKg <= 1.0
}

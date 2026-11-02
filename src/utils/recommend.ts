export function recommend(goal: string) {
  if (goal.includes('loss')) return { plan: 'Lean & Clean', program: 'Metcon Ignite', supp: 'Whey Isolate' }
  if (goal.includes('muscle')) return { plan: 'High-Protein Build', program: 'StrengthForge', supp: 'Creatine Monohydrate' }
  return { plan: 'Balanced Everyday', program: 'Foundations', supp: 'Multivitamin' }
}

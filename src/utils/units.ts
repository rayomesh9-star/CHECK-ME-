export function kgToLb(kg: number) { return kg * 2.20462 }
export function lbToKg(lb: number) { return lb / 2.20462 }
export function cmToFt(cm: number) { const totalIn = cm / 2.54; const ft = Math.floor(totalIn / 12); const inch = Math.round(totalIn % 12); return { ft, inch } }
export function ftInToCm(ft: number, inch: number) { return (ft * 12 + inch) * 2.54 }

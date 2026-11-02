import { lazy, Suspense } from 'react'

const WeightChart = lazy(() => import('recharts').then((mod) => ({
  default: ({ data }: { data: any[] }) => (
    <mod.ResponsiveContainer width="100%" height={300}>
      <mod.LineChart data={data}>
        <mod.CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <mod.XAxis dataKey="date" />
        <mod.YAxis />
        <mod.Tooltip />
        <mod.Line type="monotone" dataKey="weight" stroke="#0B2B26" strokeWidth={2} dot={{ r: 4 }} />
      </mod.LineChart>
    </mod.ResponsiveContainer>
  )
})))

export default function WeightChartWrapper({ data }: { data: any[] }) {
  return (
    <Suspense fallback={<div className="h-[300px] rounded-2xl bg-charcoal/5 animate-pulse" />}>
      <WeightChart data={data} />
    </Suspense>
  )
}

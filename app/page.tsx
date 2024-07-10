
import Statistics from "@/components/Statistics"
import Summary from "@/components/Summary"

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
      <Statistics />
      <Summary />
    </main>
  )
}

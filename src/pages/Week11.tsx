export function Week11() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-left">Week 11</h1>
      <p className="text-lg text-gray-600 text-left mb-8">
        Here's our progress for week 11!
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Meetings</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Meeting + Re-Demo with team and advisors: 03/18/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">General</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Finalized drone assembly: Dimitri - 03/11/2026
          </li>
          <li className="text-gray-700 mb-2 text-left">
            Tested drone flight with manual control: Yang - 03/13/2026
          </li>
          <li className="text-gray-700 mb-2 text-left">
            Verified all requirements for constraints and criteria of project
            are met: All - 03/15/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Mechanical</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Fixed supports for Raspberry Pi: Sehaj - 03/12/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Software</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Wrote script to read telemetry data from flight controller and set
            up reverse proxy to send it to website: James - 03/14/2026
          </li>
        </ul>
      </section>
    </div>
  )
}

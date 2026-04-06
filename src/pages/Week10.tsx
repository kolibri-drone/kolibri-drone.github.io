export function Week10() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-left">Week 10</h1>
      <p className="text-lg text-gray-600 text-left mb-8">
        Here's our progress for week 10!
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Meetings</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Meeting + Demo with team and advisors: 03/10/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">General</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Completed drone frame assembly: Dimitri - 03/01/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Mechanical</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Finished 3D printing additional supports: Sehaj - 02/22/2026
          </li>
          <li className="text-gray-700 mb-2 text-left">
            Finished drilling holes into frame: Sehaj - 02/24/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Electrical</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Resoldered camera connection to LiPO battery: Yang - 02/15/2026
          </li>
          <li className="text-gray-700 mb-2 text-left">
            Finished wiring flight controller, motors, and servos: Yang -
            02/25/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Controls</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Rigged up flight controller, servos, and motors with transmitter and
            receiver: Yang - 03/04/2026
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-left">Software</h2>
        <hr className="border-gray-300 mb-4 w-full" />
        <ul className="list-disc list-inside">
          <li className="text-gray-700 mb-2 text-left">
            Set up RTSP feed and server for live video feed: James - 03/02/2026
          </li>
          <li className="text-gray-700 mb-2 text-left">
            Set up ROS node for LiDAR data processing on Raspberry Pi: Dimitri -
            03/07/2026
          </li>
          <li className="text-gray-700 mb-2 text-left">
            Wrote scripts and set up reverse proxy for sending LiDAR data to
            website: James - 03/08/2026
          </li>
          <li className="text-gray-700 mb-2 text-left">
            Finished and implemented website design for drone feed and
            telemetry: Patrick - 03/06/2026
          </li>
        </ul>
      </section>
    </div>
  )
}

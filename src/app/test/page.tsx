export default function EnvTest() {
  return (
    <div>
      <p>NEXT_PUBLIC_SERVER_URL: {process.env.NEXT_PUBLIC_SERVER_URL}</p>
      <p>INTERNAL_API_URL: {process.env.INTERNAL_USER_SERVICE_URL}</p>
      <p>INTERNAL_VEHICLE_SERVICE_URL: {process.env.INTERNAL_VEHICLE_SERVICE_URL}</p>
    </div>
  )
}
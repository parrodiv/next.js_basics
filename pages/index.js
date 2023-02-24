import sleep from 'await-sleep'

export default function Home(props) {
  return (
    <div>
      <h2>Welcome to our homepage.</h2>
      <p>
        This is the best home page in the world. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Earum aspernatur illum architecto cumque
        recusandae fuga sequi necessitatibus deleniti repellat harum nobis,
        dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae,
        dolore.
      </p>
      <p>The weather: {props.forecast}</p>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    'https://api.weather.gov/gridpoints/MFL/109,49/forecast'
  )
  const data = await response.json()
  
  await sleep(3000)
  // note that when you reload the page it takes 3 second to reload, because every time you request this page it will be pre-rendered with getServerSideProps

  return {
    props: {
      forecast: data.properties.periods[0]  .detailedForecast,
    },
  }
}

// getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps, then:

// - When you request this page directly, getServerSideProps runs at request time, and this page will be pre-rendered with the returned props
// - When you request this page on client-side page transitions through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps
// - There is no caching going on, nothing static going on. It's fully server side dinamic


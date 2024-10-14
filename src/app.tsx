import { Carousel } from './components/carousel'
import { Services } from './components/service'
import Header from './components/header'
import { Movie } from './components/movie'
import { UpcomingEvents } from './components/upcoming-events'
import { ContactUS } from './components/contact'
import { Footer } from './components/footer'

export function App() {
  return (
    <main>
      <Header />
      <Movie />
      <Carousel />
      <UpcomingEvents />
      <Services />
      <ContactUS />
      <Footer />
    </main>
  )
}

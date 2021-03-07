
import Container from '../components/Container'
export default function Home() {
  return (
    <div>
      <Container>
          <div className="jumbotron">
          <h1 className="display-3">Prueba de NextJS!</h1>
          <hr className="my-4"/>
          <p className="lead">Primera pagina hecha con la tecnologia de NextJS, consumiendo una REST API con fetch</p>

          </div>
      </Container>
    </div>
  )
}

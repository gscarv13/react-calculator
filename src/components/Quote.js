import Header from './Header';

const Quote = () => (
  <>
    <Header />
    <div className="right">
      <div className="box">
        <p className="quote" data-testid="quote">
          ❝Mathematics is not about numbers, equations, computations,
          or algorithms: it is about understanding.❞
        </p>
        <p className="author" data-testid="author"> William Paul Thurston </p>
      </div>
    </div>
  </>
);

export default Quote;

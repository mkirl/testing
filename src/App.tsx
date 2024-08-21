import './App.css';
import Header from './components/Header';

function Hero() {
  return (
    <section className="hero h-screen bg-blue-500 flex justify-center items-center text-white">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Easy Banking Made Easy</h1>
        <p className="text-xl mb-8">Our bank offers a wide range of services to help you manage your finances.</p>
        <button className="cta-button bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
    </section>
  );
}

function Feature({ title, description }) {
  return (
    <div className="feature bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="features bg-gray-100 py-8">
      <div className="container mx-auto p-4">
        <Feature title="Account Management" description="Manage your bank accounts easily with our online banking platform." />
        <Feature title="Loans" description="Apply for loans and get the money you need to grow your business." />
        <Feature title="Investments" description="Invest in stocks, bonds, and other financial instruments with our expert advice." />
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <footer className="cta bg-blue-500 text-white py-4 text-center">
      <p className="mb-2">Ready to get started? <a href="#" className="text-orange-500 hover:text-orange-700">Sign up now</a></p>
    </footer>
  );
}

function NewsletterForm() {
  return (
    <form className="newsletter-form p-4 mb-4 border border-gray-300 rounded">
      <div className="mb-2">
        <input type="email" placeholder="Enter your email address" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Subscribe</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NewsletterForm />
      <Features />
      <CallToAction />
    </div>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SmoothScroll from './components/layout/SmoothScroll'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import CustomCursor from './components/layout/CustomCursor'
import PageTransition from './components/layout/PageTransition'
import { lazy, Suspense } from 'react'

const Quiz = lazy(() => import('./pages/Quiz'))
const Results = lazy(() => import('./pages/Results'))
const Tracker = lazy(() => import('./pages/Tracker'))
const MealPlans = lazy(() => import('./pages/MealPlans'))
const MealPlanDetail = lazy(() => import('./pages/MealPlanDetail'))
const Fitness = lazy(() => import('./pages/Fitness'))
const ProgramDetail = lazy(() => import('./pages/ProgramDetail'))
const Shop = lazy(() => import('./pages/Shop'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Checkout = lazy(() => import('./pages/Checkout'))
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Article = lazy(() => import('./pages/Article'))
const Contact = lazy(() => import('./pages/Contact'))
const Account = lazy(() => import('./pages/Account'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Preloader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/mealplans" element={<MealPlans />} />
            <Route path="/mealplans/:id" element={<MealPlanDetail />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/fitness/:id" element={<ProgramDetail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
    </div>
  )
}

export default App

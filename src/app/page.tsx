'use client'
import Header from "@/components/header/header";
import Form from "@/components/form/form";
import PreviewParent from "@/components/preview/previewParent";
import MakerProvider from '@/provider/makerProvider';
import ResultModal from "@/components/result/resultModal";
import Footer from "@/components/footer/footer";
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <MakerProvider>
        <Form />
        <PreviewParent />
        <ResultModal />
        <Footer />
      </MakerProvider>
    </main>
  )
}
export default Home;

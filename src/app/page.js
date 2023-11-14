import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-[14px]">
      <Modal />
      <Footer />  
    </main>
  )
}

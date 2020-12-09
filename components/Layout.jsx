import Footer from "./Footer";
import { motion } from 'framer-motion'

export default function CoreLayout({ children, props }) {
    return (
        <motion.div className="container mx-auto max-w-3xl pt-20" initial={{ scale: .9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{
            ease: [.16,0,0,1],
            duration: 1.5,
          }}
        >
            {children}
            <Footer />
        </motion.div>
    )
}
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

const Hero = () => {
    return (
        <Section className="min-h-screen flex items-center bg-gradient-radial-at-tl bg-gradient-radial-at-br" overlay>
            <Container className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-semibold text-sm mb-6">
                        Welcome to NCSE
                    </span>
                    <h1 className="mb-6">
                        <GradientText tag="span">NCSE</GradientText><br />
                        <span className="text-[0.8em] text-slate-100">College Name</span>
                    </h1>
                    <p className="max-w-2xl mx-auto mb-10 text-xl md:text-2xl text-slate-400">
                        "Innovating for a tech-driven tomorrow, one student at a time."
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center">
                        <Button variant="primary">
                            Explore Events
                        </Button>
                        <Button variant="secondary">
                            Learn More
                        </Button>
                    </div>
                </motion.div>
            </Container>

            <style>{`
        .bg-gradient-radial-at-tl {
          background-image: radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.05) 0px, transparent 50%);
        }
        .bg-gradient-radial-at-br {
          background-image: radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.05) 0px, transparent 50%);
        }
      `}</style>
        </Section>
    );
};

export default Hero;

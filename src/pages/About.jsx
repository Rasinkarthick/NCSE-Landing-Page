import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import GradientText from '../components/ui/GradientText';

const About = () => {
    return (
        <Section className="min-h-screen pt-40" overlay>
            <Container className="text-center">
                <GradientText tag="h1">About NCSE</GradientText>
                <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg">
                    NCSE is the premier student association dedicated to fostering technical skills and innovation in the computing field.
                    We provide a platform for students to learn, build, and lead.
                </p>
            </Container>
        </Section>
    );
};

export default About;

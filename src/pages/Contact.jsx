import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import GradientText from '../components/ui/GradientText';

const Contact = () => {
    return (
        <Section className="min-h-screen pt-40" overlay>
            <Container className="text-center">
                <GradientText tag="h1">Get in Touch</GradientText>
                <p className="mt-8 text-slate-400 text-lg">
                    Have questions? Reach out to us at <a href="mailto:contact@ncse.edu" className="text-blue-400 hover:text-blue-300">contact@ncse.edu</a>
                </p>
            </Container>
        </Section>
    );
};

export default Contact;

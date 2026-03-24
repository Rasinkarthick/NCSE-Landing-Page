import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import GradientText from '../components/ui/GradientText';

const Events = () => {
    return (
        <Section className="min-h-screen pt-40" overlay>
            <Container className="text-center">
                <GradientText tag="h1">Upcoming Events</GradientText>
                <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg">
                    Stay tuned for our upcoming technical workshops, hackathons, and guest lectures.
                </p>
            </Container>
        </Section>
    );
};

export default Events;

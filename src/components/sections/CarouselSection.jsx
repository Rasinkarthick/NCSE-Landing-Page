import Section from '../ui/Section';
import Container from '../ui/Container';
import Carousel from '../ui/Carousel';
import GradientText from '../ui/GradientText';

const CarouselSection = ({ title, subtitle, images }) => {
    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <GradientText tag="h2">{title}</GradientText>
                    {subtitle && <p className="text-slate-400 mt-4">{subtitle}</p>}
                </div>
                <Carousel images={images} />
            </Container>
        </Section>
    );
};

export default CarouselSection;

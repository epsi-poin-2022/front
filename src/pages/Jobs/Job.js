import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/containers/Header";
import {
  BORDER_RADIUS,
  HOVER_SHADOW,
  LIGHT,
  SHADOW,
  TRANSITION,
} from "../../utils/Constants";

const Section = styled.div`
  width: 80%;
  margin: 5vh auto;
  display: flex;
  justify-content: space-around;
`;
const SectionItem = styled.div`
  width: 48%;
  display: ${(props) => props.flex && "flex"};
`;
const SchoolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 5vw;
`;
const Card = styled.a`
  position: relative;
  display: block;
  height: 100%;
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
  text-decoration: none;
  box-shadow: ${SHADOW};
  transition: ${TRANSITION};
  &:hover {
    box-shadow: ${HOVER_SHADOW};
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardTitle = styled.p`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color:${LIGHT}
}`;
const SchoolCard = ({ school }) => {
  const { name, url, img } = school;
  console.log(school);
  return (
    <Card href={url} target="_blank">
      <Image src={img} alt="ae" />
      <CardTitle>{name}</CardTitle>
    </Card>
  );
};
export default function Job() {
  const jobData = {
    title: "Web Designeur",
    img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit enim, consequat aliquam mauris a, imperdiet rhoncus sem. Ut non hendrerit tellus, ac aliquam ante. Curabitur luctus pellentesque lacus, pulvinar dictum dui. Mauris efficitur mollis tortor interdum ultricies. In eget massa dignissim, dapibus lorem pretium, ultrices sem. Vestibulum ac risus volutpat, bibendum nulla sed, interdum lacus. Integer lacus nisi, convallis eget urna dapibus, vulputate rutrum lorem. In hac habitasse platea dictumst. Etiam egestas ac nulla in porta. Curabitur elementum porttitor enim, vel congue mauris viverra a. Proin mollis tortor sed magna imperdiet accumsan.</p>
        <p>Nam tortor lorem, suscipit vitae ante eu, dapibus <strong>efficitur</strong> nisi. Proin sodales, ipsum eu lobortis pretium, erat ex laoreet eros, et feugiat sapien turpis quis leo. In pulvinar odio id velit pharetra varius. Morbi pellentesque scelerisque risus. Etiam sit amet condimentum tortor, non pharetra ipsum. In mollis cursus orci, a aliquet ex condimentum a. Aliquam tempor euismod tortor, sed consequat massa tempus ut. Cras mollis metus tellus, pellentesque laoreet tortor tempor non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis purus nisi, at mattis lorem imperdiet et. Nunc pharetra velit tortor, et consequat tellus imperdiet eget. Fusce sem erat, posuere eu volutpat sit amet, tincidunt sed enim. Etiam pretium neque eu semper vulputate. Sed eget porttitor tortor, sed posuere elit. Etiam vel dolor at metus tincidunt accumsan. Aenean porttitor lacus in porta semper.</p>
        <p>Aenean et porttitor neque. Nullam consequat euismod nunc non vehicula. In hac habitasse platea dictumst. Vivamus mi mi, fermentum a egestas ac, interdum ut nunc. Vivamus malesuada ultricies lacus, vel gravida augue ultrices non. Sed nec congue sapien, sed suscipit nulla. Morbi posuere purus sit amet lectus feugiat elementum. Cras eu pulvinar dolor. Suspendisse et dui ullamcorper, fermentum magna eu, vehicula magna. Quisque lobortis vel ipsum ac iaculis.</p>
        <p>Pellentesque pretium tortor non egestas tincidunt. Aenean et faucibus elit. Donec hendrerit consectetur massa, at rhoncus libero scelerisque non. Maecenas condimentum dolor sit amet magna dignissim vulputate et in lorem. Suspendisse accumsan libero non neque facilisis, sodales convallis arcu posuere. Sed tempus consequat quam ut iaculis. Nullam eget neque eget turpis cursus tempus nec et mauris. Nam feugiat velit accumsan, convallis sapien eu, dignissim lectus. Phasellus viverra orci quis rhoncus porta. Sed egestas, libero in laoreet luctus, metus augue vehicula orci, ut venenatis erat nisl non felis. Vivamus sollicitudin leo quis turpis ultrices, at posuere est accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in augue nunc. Mauris nec pellentesque dui.</p>
        <p>Vestibulum iaculis sem augue, in feugiat nibh auctor vitae. Cras consequat ipsum vel magna lobortis, a eleifend tortor dapibus. Donec ut varius magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum tellus sed velit efficitur elementum. Nulla vel odio enim. Mauris tortor orci, aliquam at risus vel, auctor dignissim ante. Quisque odio orci, fermentum quis nulla rhoncus, pulvinar accumsan purus. Ut lorem turpis, dapibus sit amet dolor et, lacinia feugiat dolor. Cras scelerisque nec massa ut cursus. Vestibulum in elementum leo. Nam magna diam, congue ac sodales euismod, dapibus sed mauris. Suspendisse posuere fermentum lacus, gravida hendrerit leo elementum id. Nullam sit amet sem mollis, rhoncus lacus faucibus, pretium ante.</p>`,
    skills: ["creative", "organised", "teamwork", "patient"],
    schools: [
      {
        name: "epsi",
        url: "https://www.epsi.fr/",
        img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        name: "epsi",
        url: "https://www.epsi.fr/",
        img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        name: "epsi",
        url: "https://www.epsi.fr/",
        img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
    ],
  };
  const { title, img, description, skills, schools } = jobData;
  return (
    <>
      <Section>
        <SectionItem flex>
          <img
            src={img}
            alt={title}
            style={{ width: "100%", height: "auto", margin: "auto" }}
          />
        </SectionItem>
        <SectionItem>
          <h1 style={{ textAlign: "center" }}>{title}</h1>
          <p>
            Compétences :
            {skills.map((skill, i) =>
              i !== skills.length ? ` ${skill},` : skill
            )}
          </p>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </SectionItem>
      </Section>
      <Section>
        <SchoolGrid>
          {schools.map((school) => (
            <SchoolCard school={school} />
          ))}
        </SchoolGrid>
      </Section>
    </>
  );
}

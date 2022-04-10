import React, { useState } from "react";
import Jobs from "../elements/Jobs";
import Questions from "../elements/Questions";

export default function QuestionsSection() {
  const [index, setIndex] = useState(0);
  const [skills, setSkills] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [jobs, setJobs] = useState([
    {
      title: "Développeur Web",
      img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Duis quis gravida lacus, a feugiat neque. Aenean feugiat lectus non massa sollicitudin facilisis. In hac habitasse platea dictumst. Duis quis erat at sem porta congue. Aliquam erat volutpat. Duis ultricies blandit ante, rutrum aliquam mi. Mauris aliquam id nisi in pulvinar. Mauris nec diam dictum, condimentum lectus sed, volutpat magna. Nulla facilisi. Cras vulputate odio turpis, tempus facilisis quam fringilla vel. Pellentesque non aliquam tortor. Morbi est tortor, fringilla ut pulvinar nec, laoreet non est. Pellentesque tincidunt vel ante sed scelerisque.",
      skills: [
        "creative",
        "organised",
        "teamwork",
        "logic",
        "autonomous",
        "rigorous",
      ],
    },
    {
      title: "Web Designeur",
      img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Nunc at consectetur leo, viverra efficitur nisi. Praesent tempus metus sed lectus bibendum, vel iaculis metus venenatis. Suspendisse potenti. Curabitur cursus diam non nunc facilisis, id venenatis libero condimentum. Morbi blandit metus dui, accumsan mattis lorem porttitor congue. Fusce non ex ornare, tincidunt magna id, condimentum neque. Mauris id nibh id nunc mattis hendrerit vitae at purus. Aenean a justo consequat, placerat orci et, posuere nisi. Aliquam nec ante quis ante dignissim gravida at ut urna. Proin erat augue, sollicitudin ac mollis a, commodo id nibh.",
      skills: ["creative", "organised", "teamwork", "patient"],
    },
    {
      title: "Ingénieur Réseau",
      img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Analyste Digital",
      img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Ingénieur Devops",
      img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Ingénieur QA",
      img: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Data scientist",
      img: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Développeur Web",
      img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Duis quis gravida lacus, a feugiat neque. Aenean feugiat lectus non massa sollicitudin facilisis. In hac habitasse platea dictumst. Duis quis erat at sem porta congue. Aliquam erat volutpat. Duis ultricies blandit ante, rutrum aliquam mi. Mauris aliquam id nisi in pulvinar. Mauris nec diam dictum, condimentum lectus sed, volutpat magna. Nulla facilisi. Cras vulputate odio turpis, tempus facilisis quam fringilla vel. Pellentesque non aliquam tortor. Morbi est tortor, fringilla ut pulvinar nec, laoreet non est. Pellentesque tincidunt vel ante sed scelerisque.",
      skills: [
        "creative",
        "organised",
        "teamwork",
        "logic",
        "autonomous",
        "rigorous",
      ],
    },
    {
      title: "Web Designeur",
      img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Nunc at consectetur leo, viverra efficitur nisi. Praesent tempus metus sed lectus bibendum, vel iaculis metus venenatis. Suspendisse potenti. Curabitur cursus diam non nunc facilisis, id venenatis libero condimentum. Morbi blandit metus dui, accumsan mattis lorem porttitor congue. Fusce non ex ornare, tincidunt magna id, condimentum neque. Mauris id nibh id nunc mattis hendrerit vitae at purus. Aenean a justo consequat, placerat orci et, posuere nisi. Aliquam nec ante quis ante dignissim gravida at ut urna. Proin erat augue, sollicitudin ac mollis a, commodo id nibh.",
      skills: ["creative", "organised", "teamwork", "patient"],
    },
    {
      title: "Ingénieur Réseau",
      img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Analyste Digital",
      img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Ingénieur Devops",
      img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Ingénieur QA",
      img: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
    {
      title: "Data scientist",
      img: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:
        "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
      skills: ["organised", "pressure", "versatile", "foreseeing"],
    },
  ]);
  const [questions, setQuestions] = useState([
    {
      title: "Are you creative ?",
      skill: "creative",
    },
    {
      title: "Do you like solving problems ?",
      skill: "logic",
    },
    {
      title: "Do you have good communication ?",
      skill: "teamwork",
    },
    {
      title: "Are you rigorous ?",
      skill: "rigorous",
    },
    {
      title: "Do you like planning ?",
      skill: "foreseeing",
    },
  ]);
  return (
    <div>
      <Questions
        index={index}
        setIndex={setIndex}
        questions={questions}
        setSkills={setSkills}
        skills={skills}
        dislikes={dislikes}
        setDislikes={setDislikes}
      />
      <Jobs jobs={jobs} skills={skills} dislikes={dislikes} />
    </div>
  );
}

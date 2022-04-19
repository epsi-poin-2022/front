import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Illustration from "../components/elements/Illustration";
import JobsCards from "../components/elements/JobsCards";
import Questions from "../components/elements/Questions";
import Title from "../components/elements/Title";
import RequestAPI from "../utils/RequestAPI";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: calc(100vh - 80px);
  position: relative;
  align-items: center;
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  width: 45vw;
`;

const Info = styled.div`
  width: 70%;
  margin-left: auto;
`;

export default function Home() {
  const [index, setIndex] = useState(0);
  const [skills, setSkills] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  // const [jobs, setJobs] = useState([
  //   {
  //     title: "Développeur Web",
  //     img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Duis quis gravida lacus, a feugiat neque. Aenean feugiat lectus non massa sollicitudin facilisis. In hac habitasse platea dictumst. Duis quis erat at sem porta congue. Aliquam erat volutpat. Duis ultricies blandit ante, rutrum aliquam mi. Mauris aliquam id nisi in pulvinar. Mauris nec diam dictum, condimentum lectus sed, volutpat magna. Nulla facilisi. Cras vulputate odio turpis, tempus facilisis quam fringilla vel. Pellentesque non aliquam tortor. Morbi est tortor, fringilla ut pulvinar nec, laoreet non est. Pellentesque tincidunt vel ante sed scelerisque.",
  //     skills: [
  //       "creative",
  //       "organised",
  //       "teamwork",
  //       "logic",
  //       "autonomous",
  //       "rigorous",
  //     ],
  //   },
  //   {
  //     title: "Web Designeur",
  //     img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Nunc at consectetur leo, viverra efficitur nisi. Praesent tempus metus sed lectus bibendum, vel iaculis metus venenatis. Suspendisse potenti. Curabitur cursus diam non nunc facilisis, id venenatis libero condimentum. Morbi blandit metus dui, accumsan mattis lorem porttitor congue. Fusce non ex ornare, tincidunt magna id, condimentum neque. Mauris id nibh id nunc mattis hendrerit vitae at purus. Aenean a justo consequat, placerat orci et, posuere nisi. Aliquam nec ante quis ante dignissim gravida at ut urna. Proin erat augue, sollicitudin ac mollis a, commodo id nibh.",
  //     skills: ["creative", "organised", "teamwork", "patient"],
  //   },
  //   {
  //     title: "Ingénieur Réseau",
  //     img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Analyste Digital",
  //     img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Ingénieur Devops",
  //     img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Ingénieur QA",
  //     img: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Data scientist",
  //     img: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Développeur Web",
  //     img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Duis quis gravida lacus, a feugiat neque. Aenean feugiat lectus non massa sollicitudin facilisis. In hac habitasse platea dictumst. Duis quis erat at sem porta congue. Aliquam erat volutpat. Duis ultricies blandit ante, rutrum aliquam mi. Mauris aliquam id nisi in pulvinar. Mauris nec diam dictum, condimentum lectus sed, volutpat magna. Nulla facilisi. Cras vulputate odio turpis, tempus facilisis quam fringilla vel. Pellentesque non aliquam tortor. Morbi est tortor, fringilla ut pulvinar nec, laoreet non est. Pellentesque tincidunt vel ante sed scelerisque.",
  //     skills: [
  //       "creative",
  //       "organised",
  //       "teamwork",
  //       "logic",
  //       "autonomous",
  //       "rigorous",
  //     ],
  //   },
  //   {
  //     title: "Web Designeur",
  //     img: "https://images.pexels.com/photos/2265487/pexels-photo-2265487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Nunc at consectetur leo, viverra efficitur nisi. Praesent tempus metus sed lectus bibendum, vel iaculis metus venenatis. Suspendisse potenti. Curabitur cursus diam non nunc facilisis, id venenatis libero condimentum. Morbi blandit metus dui, accumsan mattis lorem porttitor congue. Fusce non ex ornare, tincidunt magna id, condimentum neque. Mauris id nibh id nunc mattis hendrerit vitae at purus. Aenean a justo consequat, placerat orci et, posuere nisi. Aliquam nec ante quis ante dignissim gravida at ut urna. Proin erat augue, sollicitudin ac mollis a, commodo id nibh.",
  //     skills: ["creative", "organised", "teamwork", "patient"],
  //   },
  //   {
  //     title: "Ingénieur Réseau",
  //     img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Analyste Digital",
  //     img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Ingénieur Devops",
  //     img: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Ingénieur QA",
  //     img: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  //   {
  //     title: "Data scientist",
  //     img: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     description:
  //       "Etiam iaculis ut velit non efficitur. Quisque vel sagittis lectus. Sed lectus augue, condimentum eu tellus nec, sodales fringilla urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet neque blandit, lobortis mi a, ornare nisi. Aliquam neque felis, pulvinar nec consequat sit amet, elementum non dui. Quisque pellentesque venenatis massa quis congue. Mauris nulla sem, elementum eu vulputate vel, consectetur non elit. Etiam magna lorem, ullamcorper id varius consequat, accumsan in ipsum. Phasellus nec maximus tellus.",
  //     skills: ["organised", "pressure", "versatile", "foreseeing"],
  //   },
  // ]);
  const [jobs, setJobs] = useState();
  const [rawJobs, setRawJobs] = useState();
  const [rawSkills, setRawSkills] = useState();
  const [rawTitles, setRawTitles] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    // let tempJobs = [];
    // RequestAPI("GET", "job_descriptions?page=1")
    //   .then((descriptionsRes) => {
    //     let descriptionsData = descriptionsRes.data;
    //     RequestAPI("GET", "skills?page=1")
    //       .then((skillsRes) => {
    //         let skillsData = skillsRes.data;
    //         RequestAPI("GET", "job_titles?page=1")
    //           .then((titlesRes) => {
    //             let titlesData = titlesRes.data;
    //             descriptionsData.forEach((description) => {
    //               let path = description.picture.split("/api/")[1];
    //               RequestAPI("GET", path)
    //                 .then((res) => {
    //                   let officialTitle;
    //                   description.jobTitles.forEach((jobTitle) => {
    //                     let jobTitleId = jobTitle.split("/api/job_titles/")[1];
    //                     titlesData.forEach((title) => {
    //                       if (
    //                         title.id === parseInt(jobTitleId) &&
    //                         title.isDefault === true
    //                       ) {
    //                         officialTitle = title.label;
    //                       }
    //                     });
    //                   });
    //                   let temp = description.skills.map(
    //                     (skill) => skill.split("/api/skills/")[1]
    //                   );
    //                   let jobSkills = [];
    //                   skillsData.forEach((skill) => {
    //                     if (temp.includes(skill.id.toString())) {
    //                       jobSkills.push(skill.name);
    //                     }
    //                   });
    //                   const jobInfo = {
    //                     title: officialTitle,
    //                     id: description.id,
    //                     description: description.shortDescription,
    //                     img: res.data.filePath,
    //                     skills: jobSkills,
    //                   };
    //                   tempJobs.push(jobInfo);
    //                   setJobs(tempJobs);
    //                 })
    //                 .catch((e) => console.log(e));
    //             });
    //           })
    //           .catch((e) => console.log(e));
    //       })
    //       .catch((e) => console.log(e));
    //   })
    //   .catch((e) => console.log(e));
    // let tempJobs = [];
    // RequestAPI("GET", "job_descriptions?page=1")
    //   .then((descriptionsRes) => {
    //     let descriptionsData = descriptionsRes.data;
    //     RequestAPI("GET", "skills?page=1")
    //       .then((skillsRes) => {
    //         let skillsData = skillsRes.data;
    //         let tempQuestions = [];
    //         skillsData.forEach((skill) => {
    //           let question = {
    //             skill: skill.name,
    //             title: skill.question,
    //           };
    //           tempQuestions.push(question);
    //         });
    //         setQuestions(tempQuestions);
    //         RequestAPI("GET", "job_titles?page=1")
    //           .then((titlesRes) => {
    //             let titlesData = titlesRes.data;
    //             let arr = descriptionsData;
    //             let promises = new Promise((resolve, reject) => {
    //               descriptionsData.forEach((description, i) => {
    //                 let path = description.picture.split("/api/")[1];
    //                 RequestAPI("GET", path)
    //                   .then((res) => {
    //                     arr.map(() => false);
    //                     let officialTitle;
    //                     description.jobTitles.forEach((jobTitle) => {
    //                       let jobTitleId =
    //                         jobTitle.split("/api/job_titles/")[1];
    //                       titlesData.forEach((title) => {
    //                         if (
    //                           title.id === parseInt(jobTitleId) &&
    //                           title.isDefault === true
    //                         ) {
    //                           officialTitle = title.label;
    //                         }
    //                       });
    //                     });
    //                     let temp = description.skills.map(
    //                       (skill) => skill.split("/api/skills/")[1]
    //                     );
    //                     let jobSkills = [];
    //                     skillsData.forEach((skill) => {
    //                       if (temp.includes(skill.id.toString())) {
    //                         jobSkills.push(skill.name);
    //                       }
    //                     });
    //                     const jobInfo = {
    //                       title: officialTitle,
    //                       id: description.id,
    //                       description: description.shortDescription,
    //                       img: res.data.filePath,
    //                       skills: jobSkills,
    //                     };
    //                     tempJobs.push(jobInfo);
    //                     arr[i] = true;
    //                     let ok = true;
    //                     arr.map((item) => {
    //                       if (!item) ok = false;
    //                     });
    //                     if (ok) {
    //                       resolve();
    //                     }
    //                   })
    //                   .catch((e) => console.log(e));
    //               });
    //             });
    //             promises.then(() => {
    //               setJobs(tempJobs);
    //             });
    //           })
    //           .catch((e) => console.log(e));
    //       })
    //       .catch((e) => console.log(e));
    //   })
    //   .catch((e) => console.log(e));
    RequestAPI("GET", "job_descriptions?page=1")
      .then((res) => setRawJobs(res.data))
      .catch((e) => console.log(e));
    RequestAPI("GET", "skills?page=1")
      .then((res) => setRawSkills(res.data))
      .catch((e) => console.log(e));
    RequestAPI("GET", "job_titles?page=1")
      .then((res) => setRawTitles(res.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (rawJobs && rawSkills && rawTitles) {
      let tempQuestions = [];
      rawSkills.forEach((skill) => {
        let question = {
          skill: skill.name,
          title: skill.question,
        };
        tempQuestions.push(question);
      });
      setQuestions(tempQuestions);
      let tempJobs = [];
      rawJobs.forEach((description, i) => {
        let path = description.picture.split("/api/")[1];
        RequestAPI("GET", path)
          .then((res) => {
            let officialTitle;
            description.jobTitles.forEach((jobTitle) => {
              let jobTitleId = jobTitle.split("/api/job_titles/")[1];
              rawTitles.forEach((title) => {
                if (
                  title.id === parseInt(jobTitleId) &&
                  title.isDefault === true
                ) {
                  officialTitle = title.label;
                }
              });
            });
            let temp = description.skills.map(
              (skill) => skill.split("/api/skills/")[1]
            );
            let jobSkills = [];
            rawSkills.forEach((skill) => {
              if (temp.includes(skill.id.toString())) {
                jobSkills.push(skill.name);
              }
            });
            const jobInfo = {
              title: officialTitle,
              id: description.id,
              description: description.shortDescription,
              img: res.data.filePath,
              skills: jobSkills,
            };
            tempJobs.push(jobInfo);
          })
          .catch((e) => console.log(e));
      });
      setJobs(tempJobs);
    }
  }, [rawJobs, rawSkills, rawTitles]);

  return (
    <>
      <Container>
        <InfoContainer>
          <Info>
            <Title title="Présente le numérique" />
            <h2>
              Donec rhoncus varius ornare. Praesent sed lacinia nisi. Etiam
              euismod in enim eu ornare. Sed bibendum imperdiet orci, nec
              venenatis erat ultrices vitae. Nunc congue nulla ut nibh iaculis
              blandit. Aenean pulvinar ipsum mauris, non malesuada ipsum luctus
              sed. Duis vitae pretium nunc. Praesent vitae semper lorem. Ut
              suscipit lobortis vehicula. In sodales massa sit amet maximus
              condimentum.
            </h2>
          </Info>
        </InfoContainer>
        <Illustration src="/img/nomad.svg" title="Digital" />
      </Container>
      <>
        {questions && (
          <Questions
            index={index}
            setIndex={setIndex}
            questions={questions}
            setSkills={setSkills}
            skills={skills}
            dislikes={dislikes}
            setDislikes={setDislikes}
          />
        )}
        {jobs && <JobsCards jobs={jobs} skills={skills} dislikes={dislikes} />}
      </>
    </>
  );
}

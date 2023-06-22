import React from "react";
import Styles from "./Skills.module.css";
import Skill from "../../Items/Skill/Skill";
import SkillDescription from "../../Items/SkillDescription/SkillDescription";
import skillsData from "../../../Data/skillsData.json";
import SoftSkills from "../../Items/SoftSkills/SoftSkills";

export default function Skills() {
  // console.log(skillsData);
  return (
    <main className={Styles.skillsMain}>
      <div className={Styles.softSkills}>
        <SoftSkills />
      </div>
      <div className={Styles.hardsSkills}>
      {skillsData.map((skill, index) => (
          <div key={index}>
            <Skill title={skill.title} page="skills" url={skill.url}/>
            <SkillDescription description={skill.description} />
          </div>
        ))}
      </div>
    </main>
  );
}

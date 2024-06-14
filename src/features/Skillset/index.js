import { data } from "../../common/data/data";
import { SkillsTile } from "../../common/SkillsTile";

export const Skillset = () => (
    <SkillsTile
        title="My skillset includes 🛠️"
        skills={data.skills}
    />
);
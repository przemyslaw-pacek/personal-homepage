import { SkillsTile } from "../../common/SkillsTile";
import { data } from "../../common/data/data";

export const ToLearn = () => (
    <SkillsTile
        title="What I want to learn next 🚀"
        skills={data.toLearn}
    />
);
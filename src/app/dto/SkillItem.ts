export interface SkillItem {
    name: string;
    icon?: string;
}

export interface SkillCategory {
    category: string;
    skills: SkillItem[];
}

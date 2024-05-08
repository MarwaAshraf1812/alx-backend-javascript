// Assuming the import paths are correctly pointing to the respective files:
import { Teacher } from './Teacher';

namespace Subjects {
    // Extend the Teacher interface with a new method
    export interface TeacherWithExperienceInC extends Teacher {
        experienceTeachingC: number;
    }

    // Cpp class extending the base Subject class
    export class Cpp extends Subject {
        // Here teacher needs to be of type TeacherWithExperienceInC
        teacher: TeacherWithExperienceInC;

        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            // Check if teacher has experience teaching C
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}

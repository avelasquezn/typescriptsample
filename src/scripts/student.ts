import {Person} from "./person";

class Student extends Person {
    studentId: number

    constructor(firstName: string, lastName: string, studentId: number) {
        super(firstName, lastName);

        this.studentId = studentId;
    }


}
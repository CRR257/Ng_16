import { Subject } from "rxjs";

export class SubjectManager { 
    //used with rxjs
    private $subject = new Subject<boolean>();

    getSubject() {
        return this.$subject.asObservable();
    }

    setSubject(value: boolean) {
        console.log(value)
        this.$subject.next(value);
    }
    
}
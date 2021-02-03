{
    /**
     * Enum
     */
    // javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const DAYS_ENUM = Object.freeze({
        "MONDAY": 0,
        "TUSEDAY": 1,
        "WEDNESDAY": 2,
    });
    const dayOfTody = DAYS_ENUM.MONDAY;

    // typescript
    enum Days {
        Monday = 1,
        Tuseday,
        Wednseday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };
    console.log(Days.Sunday);
    const day = Days.Saturday;
    console.log(day);

    type DaysOfWeek = 'Monday' | 'Tuseday' | 'wednseday';
    let dayOfWeek: DaysOfWeek = 'Monday';
    dayOfWeek = 'Tuseday';

}
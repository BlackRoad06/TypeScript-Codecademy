import courses  from "./courses";
import studyGroups from "./studyGroups";

type Course = typeof courses[0];

type StudyGroup = typeof studyGroups[0];

type SearchEventsOptions = {
  query: string | number,
  eventType: "courses" | "groups"
}


function searchEvents(options: SearchEventsOptions){
  let events: (Course | StudyGroup)[]  = options.eventType === "courses" ? courses : studyGroups;
  
  return events.filter((event: Course | StudyGroup) => {
    if(typeof options.query === "number"){
        return event.id === options.query;
    }
    if(typeof options.query === "string"){
      return event.keywords.includes(options.query);
    }


  })
}

const searchResults = searchEvents({
  query: 2,
  eventType: "courses"
});

const searchResults1 = searchEvents({
  query: "1800s",
  eventType: "groups"
});

console.log("These are your search results:");
console.log(searchResults);
console.log(searchResults1);

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup){
  enrolledEvents.push(event);
}

enroll(searchResults1[0]);

console.log("The following enrollment has been made");
console.log(enrolledEvents);


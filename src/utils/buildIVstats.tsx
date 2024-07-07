import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";

function buildIVstats(interviewInvite) {
  const stuffArray = [];
  if (interviewInvite.location) {
    stuffArray.push(interviewInvite.location ? "IS" : "OOS");
  }
  if (interviewInvite.medicalDegree) {
    stuffArray.push(interviewInvite.medicalDegree);
  }
  if (interviewInvite.img) {
    stuffArray.push(interviewInvite.img);
  }
  if (interviewInvite.step1Score) {
    stuffArray.push(interviewInvite.step1Score);
  }
  if (interviewInvite.step2Score) {
    stuffArray.push(interviewInvite.step2Score);
  }
  if (interviewInvite.comlex1Score) {
    stuffArray.push(interviewInvite.comlex1Score);
  }
  if (interviewInvite.comlex2Score) {
    stuffArray.push(interviewInvite.comlex2Score);
  }
  if (interviewInvite.geographicPreference) {
    stuffArray.push("Geographically Preferred");
  }
  if (interviewInvite.signal) {
    stuffArray.push("Signal");
  }
  if (interviewInvite.visaRequired) {
    stuffArray.push("Visa Requried");
  }
  if (interviewInvite.subI) {
    stuffArray.push("Sub-internship");
  }
  if (interviewInvite.home) {
    stuffArray.push("Home");
  }
  if (interviewInvite.away) {
    stuffArray.push("Away");
  }

  return (
    <div className={`flex flex-wrap gap-1`}>
      {stuffArray.map((stuff, index) => {
        return (
          <Badge variant="secondary" key={index}>
            {stuff}
          </Badge>
        );
      })}
    </div>
  );
}

export default buildIVstats;

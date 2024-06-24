import { Link } from "react-router-dom";

function buildIVstats(interviewInvite) {
  const stuffArray = [""];
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
    stuffArray.push(interviewInvite.geographicPreference ? "+geo" : "-geo");
  }
  if (interviewInvite.signal) {
    stuffArray.push(interviewInvite.signal ? "+sig" : "-sig");
  }
  if (interviewInvite.visaRequired) {
    stuffArray.push(interviewInvite.visaRequired ? "+visa" : "-visa");
  }
  if (interviewInvite.subI) {
    stuffArray.push(interviewInvite.subI ? "+subI" : "-subI");
  }
  if (interviewInvite.home) {
    stuffArray.push(interviewInvite.home ? "+home" : "-home");
  }
  if (interviewInvite.away) {
    stuffArray.push(interviewInvite.away ? "+away" : "-away");
  }

  return (
    <span>
      <Link
        to={`profile/${interviewInvite.userProfile.id}`}
        className={`underline`}
      >
        {interviewInvite.userProfile.username}
      </Link>
      {stuffArray.length > 1 ? stuffArray.join(" · ") : null}
    </span>
  );
}

export default buildIVstats;

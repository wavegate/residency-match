function buildIVstats(interviewInvite) {
  const stuffArray = [];
  if (interviewInvite.instate) {
    stuffArray.push(interviewInvite.instate ? "IS" : "OOS");
  }
  if (interviewInvite.graduateType) {
    stuffArray.push(interviewInvite.graduateType);
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
  return stuffArray.join("; ");
}

export default buildIVstats;

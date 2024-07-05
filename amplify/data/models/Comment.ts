import { a } from "@aws-amplify/backend";

const Comment = {
  Comment: a
    .model({
      sortType: a.string(),
      commentType: a.enum([
        "general",
        "rankList",
        "comparison",
        "interviewImpression",
        "LOIResponse",
        "M4InternImpression",
        "malignant",
        "scheduleDetails",
        "postIVCommunication",
        "tierList",
      ]),
      rankListId: a.id(),
      rankList: a.belongsTo("RankList", "rankListId"),
      userProfileId: a.id().required(),
      userProfile: a.belongsTo("UserProfile", "userProfileId"),
      comparisonId: a.id(),
      comparison: a.belongsTo("Comparison", "comparisonId"),
      interviewImpressionId: a.id(),
      interviewImpression: a.belongsTo(
        "InterviewImpression",
        "interviewImpressionId"
      ),
      LOIResponseId: a.id(),
      LOIResponse: a.belongsTo("LOIResponse", "LOIResponseId"),
      M4InternImpressionId: a.id(),
      M4InternImpression: a.belongsTo(
        "M4InternImpression",
        "M4InternImpressionId"
      ),
      malignantId: a.id(),
      malignant: a.belongsTo("Malignant", "malignantId"),
      scheduleDetailsId: a.id(),
      scheduleDetails: a.belongsTo("ScheduleDetails", "scheduleDetailsId"),
      postIVCommunicationId: a.id(),
      postIVCommunication: a.belongsTo(
        "PostIVCommunication",
        "postIVCommunicationId"
      ),
      content: a.string().required(),
      createdAt: a.datetime().required(),
    })
    .secondaryIndexes((index) => [
      index("userProfileId"),
      index("commentType").sortKeys(["createdAt"]),
      index("comparisonId").sortKeys(["createdAt"]),
    ])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
};

export default Comment;

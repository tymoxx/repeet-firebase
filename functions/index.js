const functions = require("firebase-functions");
const request = require("request");


exports.notifyNewSignup = functions.auth.user().onCreate((user, context) => {
    const {email, uid, providerData} = user;

    return request.post("https://hooks.slack.com/services/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", {
        json: {
            text: `✨ New signup
            ${email}
            ${uid}
            ${providerData[0]?.providerId}`,
            channel: "#feed",
            icon_emoji: ":ghost:",
            username: "Repeet bot",
            // webhookbot: "",
        }
    })
});

exports.notifyUserDeleting = functions.auth.user().onDelete((user, context) => {
    const {email} = user;

    return request.post("https://hooks.slack.com/services/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", {
        json: {
            text: `👋 User deleted his profile ${email}!`,
            channel: "#feed",
            icon_emoji: ":ghost:",
            username: "Repeet bot",
            // webhookbot: "",
        }
    })
});

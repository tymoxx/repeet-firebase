const functions = require("firebase-functions");
const request = require("request");

const WEBHOOK_URL = "https://hooks.slack.com/services/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";

exports.notifyNewSignup = functions.auth.user().onCreate((user, context) => {
    const {email, uid, providerData} = user;

    return request.post(WEBHOOK_URL, {
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

    return request.post(WEBHOOK_URL, {
        json: {
            text: `👋 User deleted his profile ${email}!`,
            channel: "#feed",
            icon_emoji: ":ghost:",
            username: "Repeet bot",
            // webhookbot: "",
        }
    })
});

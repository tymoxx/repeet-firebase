const functions = require("firebase-functions");
const request = require("request");


exports.notifyNewSignup = functions.auth.user().onCreate((user, context) => {
    const {email} = user;

    return request.post("https://hooks.slack.com/services/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", {
        json: {
            text: `✨ New signup from ${email}!`,
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

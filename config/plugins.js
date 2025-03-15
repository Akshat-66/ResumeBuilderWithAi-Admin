module.exports = () => ({
    session: {
        enabled: true,
        client: { secure: true, sameSite: "None" },
    },
});

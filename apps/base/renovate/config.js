module.exports = {
  endpoint: 'https://api.github.com/',
  platform: 'github',
  token: process.env.RENOVATE_TOKEN,
  repositories: ['your-username/your-repository'],
  onboardingConfig: {
    extends: ['config:recommended'],
  },
  packageRules: [
    {
      matchUpdateTypes: ['minor', 'patch', 'pin', 'digest'],
      matchDepTypes: ['dependencies', 'devDependencies'],
      groupName: 'all non-major dependencies',
      groupSlug: 'all-minor-patch',
    },
  ],
};

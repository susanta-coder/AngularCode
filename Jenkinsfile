#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                checkoutAndStash()
                deploy([
                    releaseBranches: [
                        develop: 'development',
                        qa: 'qa',
                        staging: 'staging',
                    ],
                    deployMethod: 'rpaas',
                    useEnvironmentPrefixes: true,
                    environmentPrefixes: [
                        'development': 'dev-',
                        'staging': 'stg-',
                        'qa': 'qa-',
                    ],
                    cfConfig: [
                        organization: 'trafficgate-public',
                        appName: 'tg-affiliate-ui',
                    ],
                    secretPrefix: 'tg-affiliate-ui',
                ])
            }
        }
    }
}

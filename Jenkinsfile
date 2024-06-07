pipeline {
    agent any
    stages {
        stage('Init') {
            steps {
                echo 'Testing..'
            }
        }
        stage ('Deployments') {
            steps {
                echo 'Deploying to Production environment...'
                echo 'Copy project over SSH...'
                sshPublisher(publishers: [
                    sshPublisherDesc(
                        configName: 'CuongServer',
                        transfers:
                            [sshTransfer(
                                cleanRemote: false,
                                excludes: '',
                                execCommand: "docker build -t devopsdocsweb ./cuongdev/devopsdocswebCI/ \
                                    && docker service rm cuongit_devopsdocsweb  || true \
                                    && docker stack deploy -c ./cuongdev/devopsdocswebCI/docker-compose.yml cuongit \
                                    && rm -rf ./cuongdev/devopsdocswebCIB \
                                    && mv ./cuongdev/devopsdocswebCI/ ./cuongdev/devopsdocswebCIB",
                                execTimeout: 1200000,
                                flatten: false,
                                makeEmptyDirs: false,
                                noDefaultExcludes: false,
                                patternSeparator: '[, ]+',
                                remoteDirectory: './cuongdev/devopsdocswebCI',
                                remoteDirectorySDF: false,
                                removePrefix: '',
                                sourceFiles: '*, src/, docs/, blog/, static/, .docusaurus/'
                            )],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: true
                    )
                ])
            }
        }
    }
}
pipeline {
  environment {
    registry = "ncrmns/beparty"
    registryCredential = 'dockerhubncrmns'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Build') {
			when {
				branch 'master'
			}
        steps {
						sh 'wget https://elasticbeanstalk-us-east-1-124429370407.s3.amazonaws.com/beparty/.env'
            checkout scm
            sh 'docker build -t ncrmns/beparty .'
        }
    }
    stage('Building DockerImage') {
			when {
				branch 'master'
			}
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage ('==>DockerHub') {
			when {
				branch 'master'
			}
			steps {
				script {
					docker.withRegistry( '', registryCredential ) {
						dockerImage.push('latest')
					}
				}
			}
		}
    stage ('==>AWS') {
			when {
				branch 'master'
			}
      steps {
        withAWS(region:'us-east-1',credentials:'awsebcred') {
          sh 'sh ./deploy.sh'
        }
			}
		}
  }
}

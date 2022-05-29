pipeline {
  agent any
  tools { nodejs 'nodejs' }
  environment {
    SQLHOST = 'localhost'
    SQLPORT = '3306'
    SQLUSER = 'root'
    SQLPASSWORD = 'password'
    SQLDATABASE = 'users'
  }
  stages {
    stage('Install deps') {
      steps {
        sh 'npm install'
      }
    }
    stage('Setup Test DB') {
      steps {
        sh 'docker stop $(docker ps -a -q)'
        sh 'docker rm $(docker ps -a -q)'
        sh 'docker-compose up -d'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Migrate Test DB') {
      steps {
        sh 'npm run migration:run'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Deploy') {
      steps {
        echo 'here should be a deploy script invocatin'
      }
    }
  }
}
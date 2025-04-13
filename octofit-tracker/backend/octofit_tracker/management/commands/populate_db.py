from django.core.management.base import BaseCommand
from django.conf import settings
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the database with test data'

    def handle(self, *args, **kwargs):
        # Connect to MongoDB
        client = MongoClient(settings.DATABASES['default']['HOST'], settings.DATABASES['default']['PORT'])
        db = client[settings.DATABASES['default']['NAME']]

        # Clear existing data
        db.users.delete_many({})
        db.teams.delete_many({})
        db.activity.delete_many({})
        db.leaderboard.delete_many({})
        db.workouts.delete_many({})

        # Add test users
        user1 = {"email": "john.doe@example.com", "name": "John Doe", "password": "password123"}
        user2 = {"email": "jane.smith@example.com", "name": "Jane Smith", "password": "password123"}
        db.users.insert_many([user1, user2])

        # Add test teams
        team1 = {"name": "Team Alpha", "members": [user1["email"], user2["email"]]}
        db.teams.insert_one(team1)

        # Add test activities
        activity1 = {"user": user1["email"], "activity_type": "Running", "duration": 30, "date": "2025-04-12"}
        activity2 = {"user": user2["email"], "activity_type": "Cycling", "duration": 45, "date": "2025-04-12"}
        db.activity.insert_many([activity1, activity2])

        # Add test leaderboard
        leaderboard1 = {"team": team1["name"], "points": 100}
        db.leaderboard.insert_one(leaderboard1)

        # Add test workouts
        workout1 = {"name": "Push-ups", "description": "Do 20 push-ups", "duration": 10}
        workout2 = {"name": "Sit-ups", "description": "Do 30 sit-ups", "duration": 15}
        db.workouts.insert_many([workout1, workout2])

        self.stdout.write(self.style.SUCCESS('Database populated with test data.'))

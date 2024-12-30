<?php

namespace Http\Controllers;

use DateTime;
use Http\Controllers\BaseController;

class UserProfileController extends BaseController
{
    public function addUser()
    {
        //  Check if it's a POST request
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {

            // User Input
            $RequestData = static::requestJSON();

            // Validate required fields
            if (empty($RequestData['name']) || empty($RequestData['email']) || empty($RequestData['dob']) || empty($RequestData['password'])) {
                return static::respondJSON([
                    'Success'  => false,
                    'Colour'   => 'red',
                    'Data'     => ['Message' => 'All fields are required!']
                ], static::STATUS_ERROR);
            }

            // Validate email format
            if (!filter_var($RequestData['email'], FILTER_VALIDATE_EMAIL)) {
                return static::respondJSON([
                    'Success'  => false,
                    'Colour'   => 'red',
                    'Data'     => ['Message' => 'Invalid email format!']
                ], static::STATUS_ERROR);
            }

            // Validate date of birth format
            $dobDate = DateTime::createFromFormat('Y-m-d', $RequestData['dob']);
            if (!$dobDate || $dobDate->format('Y-m-d') !== $RequestData['dob']) {
                return static::respondJSON([
                    'Success'  => false,
                    'Colour'   => 'red',
                    'Data'     => ['Message' => 'Invalid date of birth format. Use YYYY-MM-DD.']
                ], static::STATUS_ERROR);
            }

            // Save the data in the DB
            $insertUser = insertData(DB(), 'user', 'id', $RequestData);
            if ($insertUser) {
                return static::respondJSON([
                    'Success'  => true,
                    'Colour'   => 'green',
                    'Data'     => ['Message' => 'Record inserted suceessfully!']
                ], static::STATUS_SUCCESS);
            } else {
                return static::respondJSON([
                    'Success'  => false,
                    'Colour'   => 'red',
                    'Data'     => ['Message' => 'Failed to insert record!']
                ], static::STATUS_ERROR);
            }
        }
    }

    public function getUserByID($userID)
    {
        if ($userID) {
            // Get user by ID
            $userDetails = fetchAssocByID(DB(), 'user', 'id', $userID);
            if (!empty($userDetails)) {
                return static::respondJSON([
                    'Success'  => true,
                    'Colour'   => 'green',
                    'Data'     => [$userDetails]
                ], static::STATUS_SUCCESS);
            } else {
                return static::respondJSON([
                    'Success'  => false,
                    'Colour'   => 'red',
                    'Data'     => []
                ], static::STATUS_SUCCESS);
            }
        }
    }

    public function updateUser($userID)
    {
        $RequestData = static::requestJSON(); // User Input
        if (isset($userID)) {
            if (!empty($RequestData)) {

                // Validate email format
                if (!filter_var($RequestData['email'], FILTER_VALIDATE_EMAIL)) {
                    return static::respondJSON([
                        'Success'  => false,
                        'Colour'   => 'red',
                        'Data'     => ['Message' => 'Invalid email format!']
                    ], static::STATUS_ERROR);
                }

                // Validate date of birth format
                $dobDate = DateTime::createFromFormat('Y-m-d', $RequestData['dob']);
                if (!$dobDate || $dobDate->format('Y-m-d') !== $RequestData['dob']) {
                    return static::respondJSON([
                        'Success'  => false,
                        'Colour'   => 'red',
                        'Data'     => ['Message' => 'Invalid date of birth format. Use YYYY-MM-DD.']
                    ], static::STATUS_ERROR);
                }

                $updateUser = updateData(DB(), 'user', 'id', $userID, $RequestData); // Update user
                if ($updateUser) {
                    return static::respondJSON([
                        'Success'  => true,
                        'Colour'   => 'green',
                        'Data'     => ['Message' => 'Record updated suceessfully!']
                    ], static::STATUS_SUCCESS);
                } else {
                    return static::respondJSON([
                        'Success'  => false,
                        'Colour'   => 'red',
                        'Data'     => ['Message' => 'Failed to update record!']
                    ], static::STATUS_ERROR);
                }
            }
        }
    }

    public function deleteUser($userID)
    {
        if ($userID) {
            $deleteUserData = deleteData(DB(), 'user', 'id', $userID); // Delete user
            if ($deleteUserData) {
                return static::respondJSON([
                    'Success'  => true,
                    'Colour'   => 'green',
                    'Data'     => ['Message' => 'Record deleted suceessfully!']
                ], static::STATUS_SUCCESS);
            } else {
                return static::respondJSON([
                    'Success'  => false,
                    'Colour'   => 'red',
                    'Data'     => ['Message' => 'Failed to delete record!']
                ], static::STATUS_ERROR);
            }
        }
    }

    public function getAllUsers()
    {
        $users = fetchAssocAll(DB(), 'user'); // Get all users in associative array
        if (!empty($users)) {
            return static::respondJSON([
                'Success' => true,
                'Colour'  => 'green',
                'Data'    => $users
            ], static::STATUS_SUCCESS);
        } else {
            return static::respondJSON([
                'Success'  => true,
                'Colour'   => 'green',
                'Data'     => []
            ], static::STATUS_SUCCESS);
        }
    }
}

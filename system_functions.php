<?php

function dd($Args)
{
    echo "<pre>";
    print_r($Args);
    echo "</pre>";
    die;
}

function setCreatedOrModifiedBy($DB, $TableName, $FieldNames, $PrimaryKeyFieldName, $PrimaryKeyFieldValue = null)
{
    if (isset($PrimaryKeyFieldValue)) {
        $FieldUpdates = [];
        foreach ($FieldNames as $FieldName => $Value) {
            // Quote string values and escape them
            $EscapedValue = "'" . $DB->real_escape_string($Value) . "'";
            $FieldUpdates[] = "`{$FieldName}` = {$EscapedValue}";
        }

        // Join the fields into a single string for the SET clause
        $FieldUpdatesString = implode(", ", $FieldUpdates);
        $SQLQuery = "UPDATE `{$TableName}` SET {$FieldUpdatesString} WHERE `{$PrimaryKeyFieldName}` = {$PrimaryKeyFieldValue} LIMIT 1;";

        if ($DB->query($SQLQuery) === TRUE) {
            return true;
        } else {
            return false;
        }
    }
}

function insertData($DB, $TableName, $PrimaryKeyFieldName, $Data)
{
    if (!empty($TableName) && !empty($Data)) {
        $Columns = [];
        $Values = [];
        $FieldNames = ['created_by' => 'Salman', 'modified_by' => 'Salman'];

        foreach ($Data as $FieldName => $Value) {
            // If the field is 'password', hash the value
            if ($FieldName === 'password') {
                $Value = password_hash($Value, PASSWORD_BCRYPT);
            }

            // Add column and corresponding value
            $Columns[] = "`{$FieldName}`";
            $EscapedValue = is_numeric($Value) ? $Value : "'" . $DB->real_escape_string($Value) . "'";
            $Values[] = $EscapedValue;
        }

        // Join columns and values for the query
        $ColumnsString = implode(", ", $Columns);
        $ValuesString = implode(", ", $Values);

        $SQLQuery = "INSERT INTO `{$TableName}` ({$ColumnsString}) VALUES ({$ValuesString});";

        if ($DB->query($SQLQuery) === TRUE) {
            setCreatedOrModifiedBy($DB, $TableName, $FieldNames, $PrimaryKeyFieldName, $DB->insert_id);
            return true;
        } else {
            return false;
        }
    }
}

function updateData($DB, $TableName, $PrimaryKeyFieldName, $PrimaryKeyFieldValue, $Data)
{
    if (isset($PrimaryKeyFieldName) && !empty($PrimaryKeyFieldValue) && !empty($Data)) {
        $FieldUpdates = [];

        foreach ($Data as $FieldName => $Value) {
            // if Field is password then hash it before updating
            if ($FieldName === 'password') {
                $Value = password_hash($Value, PASSWORD_BCRYPT);
            }
            // Quote string values and escape them
            $EscapedValue = is_numeric($Value) ? $Value : "'" . $DB->real_escape_string($Value) . "'";
            $FieldUpdates[] = "`{$FieldName}` = {$EscapedValue}";
        }

        // Join the fields into a single string for the SET clause
        $FieldUpdatesString = implode(", ", $FieldUpdates);

        // Escape the primary key field value
        $EscapedPrimaryKeyValue = is_numeric($PrimaryKeyFieldValue) ? $PrimaryKeyFieldValue : "'" . $DB->real_escape_string($PrimaryKeyFieldValue) . "'";

        $SQLQuery = "UPDATE `{$TableName}` SET {$FieldUpdatesString} WHERE `{$PrimaryKeyFieldName}` = {$EscapedPrimaryKeyValue} LIMIT 1;";

        // Execute the query
        if ($DB->query($SQLQuery) === TRUE) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function deleteData($DB, $TableName, $PrimaryKeyFieldName, $PrimaryKeyFieldValue)
{
    $SQLQuery = "DELETE FROM {$TableName} WHERE {$PrimaryKeyFieldName} = {$PrimaryKeyFieldValue}";

    if ($DB->query($SQLQuery) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function fetchAssocByID($DB, $TableName, $PrimaryKeyFieldName, $PrimaryKeyFieldValue)
{
    $SQLQuery = "SELECT * FROM {$TableName} WHERE {$PrimaryKeyFieldName} = {$PrimaryKeyFieldValue}";

    $result = $DB->query($SQLQuery);
    if ($result->num_rows > 0) {
        return $result->fetch_assoc();
    } else {
        return [];
    }
}

function fetchAssocAll($DB, $TableName)
{
    $SQLQuery = "SELECT `id`, `name`, `email`, `dob` FROM {$TableName}";

    $result = $DB->query($SQLQuery);
    if ($result->num_rows > 0) {
        return $result->fetch_all(MYSQLI_ASSOC);
    } else {
        return [];
    }
}

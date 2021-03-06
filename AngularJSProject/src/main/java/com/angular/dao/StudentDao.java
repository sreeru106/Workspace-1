package com.angular.dao;

import java.util.List;

import javax.persistence.EntityExistsException;

import com.angular.entity.Student;

public interface StudentDao {
	
	public void saveStudentDetail(Student student) throws EntityExistsException;
	
	public List<Student> fetchAll();
	
	public boolean isStudentExists(Student student);
	
	public void deleteStudent(Long id) throws IllegalArgumentException;
	
	public void modifyStudentDetails(Student student, Long id) throws IllegalArgumentException;
}
